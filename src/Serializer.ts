/*
Copyright (C) 2022 Maxime Lecoq <maxime@lecoqlibre.fr>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import Semanticable from './Semanticable';

/**
 * This interface defines the object that will effectively 
 * serialize an object that implements the Serializable interface.
 * 
 * The process method runs the particular algorythm used to 
 * serialize the object. It generaly iterates thougth the semantic 
 * properties of the object.
 * 
 * For instance, the ObjectSerializer serializes a Semanticable as 
 * a plain object.
 * 
 * @see The Serializable interface.
 * @see The ObjectSerializer class.
 */
export default interface Serializer<Output> {

    /**
     * This method applies this serializer algorythm to the specified subject 
     * and return the result.
     * 
     * @param subject The object to serialize.
     */
    process(subject: Semanticable): Output;

}