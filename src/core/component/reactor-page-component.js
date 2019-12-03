import ReactorComponent from "./reactor.component";

class ReactorPageComponent extends ReactorComponent {
    /**
     * Set page meta data
     * 
     * @param  {string} key
     * @param  {string} value
     * @returns this  
     */
    setMeta(key, value) {
        switch (key) {
            case 'title':
                document.title = value;
                break;
            case 'description':
                let metaDescriptionTag = document.getElementById('meta-description')
                metaDescriptionTag.content = value;
                break;
            default:
                break;
        }

        return this;
    }
}

export default ReactorPageComponent;