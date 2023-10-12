/**
* simplePass - A JavaScript password generator.
* Copyright (C) 2023  Jordan Vezina(staticBanter)
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

/**
 * Interface object that describes the attributes for the 'Strength Scores' object.
 *
 * @interface strengthScoreAttributes
 * @property {string} colour The colour for the given score.
 * @property {string} score The numeric score needed to surpass this score level.
 */

'use strict';

export default interface strengthScoreAttributes{
    colour: string,
    score: number
};
