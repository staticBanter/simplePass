import config from "../simplePass.config.js";
import messageHandler from "./messageHandler.function.js";
import simplePass from "../simplePass.js";

/**
 * @file
 * @module initializer
 */


/**
 * Initialize the simplePass form and its inputs.
 *
 *
 * @function initializer
 * @param cFig A [simplePass configuration]{@link config} object
 * @returns {void}
 */
export default function initializer(cFig: typeof config = config): void{

    if (typeof (cFig) !== 'object') {

        messageHandler(
            {
                messageKey: 'ERROR.simplePass-Init.2: Initializer Configuration argument must be of type "object".',
            },
            {
                htmlMessage:{
                    messageBoard: document.body
                },
                consoleMessage: true,
                level:"ERROR",
            },
            cFig
        );

        return;
    }

    // Get the base form element.
    const spForm:HTMLFormElement|null = document.querySelector<HTMLFormElement>(cFig.htmlElements.forms)

    if (!spForm) {

        messageHandler(
            {
                messageKey: 'ERROR.simplePass-Init.1: Could not find the form',
            },
            {
                htmlMessage:{
                    messageBoard: document.body
                },
                consoleMessage: true,
                level:"ERROR",
            },
            cFig
        );

        return;
    }

    // Password length
    const passwordLengthIn: HTMLInputElement | null = spForm.querySelector<HTMLInputElement>('input[name=length]');

    passwordLengthIn!.min = cFig.min_passwordLength.toString();
    passwordLengthIn!.max = cFig.max_passwordLength.toString();
    passwordLengthIn!.step = "1";
    passwordLengthIn!.required = true;


    // Exclude Characters
    const excludeCharactersIn: HTMLInputElement | null = spForm.querySelector<HTMLInputElement>('input[name=excludeCharacters]');
    const excludeCharactersInMinLength = (config.max_passwordLength - 6); // TODO: Move this.

    excludeCharactersIn!.minLength = 1;
    excludeCharactersIn!.maxLength = excludeCharactersInMinLength;
    excludeCharactersIn!.pattern = '/[\s]/g';

    // Repeating Characters Input
    const maxRepeatingCharacterIn: HTMLInputElement | null = spForm.querySelector<HTMLInputElement>('input[name=max_repeatingCharacter]');

    maxRepeatingCharacterIn!.min = "1";
    maxRepeatingCharacterIn!.max = "100";
    maxRepeatingCharacterIn!.step = "1";

    // Custom Repeating Characters Input
    const customRepeatingCharactersIn: HTMLInputElement | null = spForm.querySelector<HTMLInputElement>('input[name=customRepeatingCharacters]');

    customRepeatingCharactersIn!.minLength = 1;
    customRepeatingCharactersIn!.maxLength = 100;


    // Batch Password Input
    const batchInput: HTMLInputElement | null = document.body.querySelector<HTMLInputElement>(cFig.htmlElements.batchPasswordInput);

    batchInput!.min = '1';
    batchInput!.max = '256';
    batchInput!.step = '1';


    // Set Values For Default Password Inputs
    Object.entries(cFig.defaultPasswordModifier).forEach(([key, value]) => {

        const defaultIn: HTMLInputElement | null = spForm.querySelector<HTMLInputElement>(`input[name=${key}]`);
        const defaultInType: string | null = defaultIn!.getAttribute('type');

        if (value) {

            if (
                !defaultInType
                || defaultInType === 'input'
                || defaultInType === 'number'
            ) {
                defaultIn!.value = value.toString();
            } else {
                defaultIn!.checked = true;
            }
        }

    });


    // Find Password Box Elements

    const passwordBox: HTMLElement | null = document.body.querySelector<HTMLElement>(cFig.htmlElements.passwordBox);

    const passwordContainer: HTMLElement | null = passwordBox!.querySelector<HTMLElement>(cFig.htmlElements.passwordContainer);

    const passwordParagraph: HTMLParagraphElement | null = passwordBox!.querySelector<HTMLParagraphElement>(cFig.htmlElements.passwordParagraph);

    const passwordEntropy: HTMLElement | null = passwordBox!.querySelector<HTMLElement>(cFig.htmlElements.entropyContainer);


    // Set the first password.
    const password = simplePass(
        {
            length:22,
            lowercase:true,
            uppercase:true,
            numbers:true,
            punctuation:true
        },
        {
            styleTarget:passwordParagraph!,
            styleType:"inline"
        },
        {
            messageBoard: passwordBox!,
        }
    );

    if (typeof (password) === 'string') {
        passwordParagraph!.innerText = password;
    } else {

        passwordParagraph!.innerText = password.password;
        passwordEntropy!.innerText = Math.floor(password.entropy).toString();

    }


    // Event Listener For The Form

    spForm.addEventListener('submit', function (event) {

        event.preventDefault();


        let password;
        const passwordListID:string = "sp_passwordList";

        if (batchInput!.value) {

            let batch: number = parseInt(batchInput!.value);

            if (
                batch < 1
                || batch > 256
            ) {
                throw new Error("Request Password Batch Amount Was Out Of Bounds.");
            }

            passwordContainer!.querySelector(`#${passwordListID}`)?.remove();
            passwordEntropy!.parentElement?.remove();
            passwordParagraph!.remove();

            const OL:HTMLElement = document.createElement("OL");
            OL.id = passwordListID;

            while (batch--) {

                const LI = document.createElement("LI");

                const listedPassword = document.createElement("P");
                listedPassword.classList.add('listedPassword');

                const listedPasswordEntropy = document.createElement("P");

                const password = simplePass(
                    new FormData(this),
                    {
                        styleTarget: listedPassword,
                        styleType: "inline"
                    },
                    {
                        messageBoard: passwordBox!,
                    }
                );

                if (typeof (password) !== 'object') {

                    messageHandler(
                        {
                            messageKey: 'ERROR.simplePass-Init.7: The password was not an object',
                        },
                        {
                            htmlMessage:{
                                messageBoard: document.body
                            },
                            consoleMessage: true,
                            level:"ERROR",
                        },
                        cFig
                    );

                    return;
                }

                listedPassword.innerText = password.password;
                listedPasswordEntropy.innerText = `Bits of Entropy : ~${Math.floor(password.entropy)}`;

                LI.appendChild(listedPassword);
                LI.appendChild(listedPasswordEntropy);
                OL.appendChild(LI);
            }

            passwordContainer!.appendChild(OL);
            passwordContainer!.dataset.batchType = 'list';

        } else {

            password = simplePass(
                new FormData(this),
                {
                    styleTarget: passwordParagraph!,
                    styleType: "inline"
                },
                {
                    messageBoard: passwordContainer!,
                }
            );

            passwordContainer!.querySelector(`#${passwordListID}`)?.remove();

            if (!passwordContainer!.querySelector(cFig.htmlElements.passwordParagraph)) {

                let displayEntropy = document.createElement("P");
                displayEntropy.innerText = 'Bits of Entropy: ~';

                passwordContainer!.appendChild(passwordParagraph!);
                console.debug(passwordEntropy)
                displayEntropy.appendChild(passwordEntropy!);
                passwordContainer!.appendChild(displayEntropy);
            }

            if (typeof (password) !== 'object') {

                messageHandler(
                    {
                        messageKey: 'ERROR.simplePass-Init.8: The password was not an object',
                    },
                    {
                        htmlMessage:{
                            messageBoard: document.body
                        },
                        consoleMessage: true,
                        level:"ERROR",
                    },
                    cFig
                );

                return;
            }

            passwordParagraph!.innerText = password.password;
            passwordEntropy!.innerText = Math.floor(password.entropy).toString();
            passwordEntropy!.parentElement!.removeAttribute('style');
            passwordContainer!.dataset.batchType = 'single';

        }

    });

    /**
     * Event listeners for "Radio Checkboxes".
     * Just loops through all the checkboxes and unchecks and box that does not have the same value as the
     * currently clicked box.
     */
    const radioCheckboxes:NodeListOf<HTMLInputElement> = spForm.querySelectorAll<HTMLInputElement>('input[data-radioCheckbox]');

    radioCheckboxes.forEach((input)=>{
        input.addEventListener('click',function(){
            radioCheckboxes.forEach((input)=>{
                if(input.value !== this.value){
                    if(input.checked){
                        input.checked=false;
                    }
                }
            });
        });
    });

    // Copy the password to clipboard when copy button is clicked
    document.body.querySelector<HTMLButtonElement>(cFig.htmlElements.copyButton)?.addEventListener('click',function(event){
        event.preventDefault();

        switch(passwordContainer!.dataset.batchType){
            default:
            case 'single':

                navigator.clipboard.writeText(passwordParagraph!.innerText).then(()=>{
                    this.style.backgroundColor = `green`;
                    this.innerText = 'Copied!';
                    setTimeout(()=>{
                        this.toggleAttribute('style');
                        this.innerText = 'Copy';
                    },5000);
                })
                .catch((error)=>{
                    console.error(error.message);
                });

            break;
            case 'list':

                let copyString = '';

                passwordContainer!.querySelectorAll<HTMLLIElement>("LI").forEach((element:HTMLLIElement)=>{
                    copyString += `${element.querySelector('p')?.innerText}\n`;
                });

                navigator.clipboard.writeText(copyString).then(()=>{
                    this.style.backgroundColor = `green`;
                    this.innerText = 'Copied!';
                    setTimeout(()=>{
                        this.toggleAttribute('style');
                        this.innerText = 'Copy';
                    },5000);
                })
                .catch((error)=>{
                    console.error(error.message);
                });

            break;
        }

    });

}