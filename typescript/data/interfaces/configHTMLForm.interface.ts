/**
 * Interface that defines the 'Config HTML Form' object that is used to help simplePass determine what HTML Forms to use.
 *
 * @interface configHTMLForm
 * @property {string} [id] A HTML id attribute string.
 * @property {string} [class] A HTML class attribute string
 */

'use strict';

export default interface configHTMLForm {
    id?:string,
    class?:string
}