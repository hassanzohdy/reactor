import { Component } from "react";
import { Obj } from 'reinforcements';

class ReactorComponent extends Component {
    /**
     * Set the given value to its corresponding key
     * The key here is a dot notation basis 
     *
     * @param {string} key
     * @param {*} value
     * @memberof ReactorComponent
     */
    set(key, value) {
        this.setState(
            Obj.set(this.state, key, value),
        );
    }
    
    /**
     * Get the value of the given `dot.notation` key from state
     * 
     * @param   {string} key
     * @param   {*} $default
     * @returns {*}  
     */    
    get(key, $default = null) {
        return Obj.get(this.state, key, $default);
    }
}

export default ReactorComponent;