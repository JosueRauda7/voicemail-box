import React from 'react';

//Components
import VoiceMailTable from '../VoiceMailTable/VoiceMailTable';

//Assets
import classes from './ListVoiceMail.module.css';

class ListVoiceMail extends React.Component {

    render(){

        let listView = null;

        if(this.props.toLoad === 'new')
        {
            listView = 'Nuevo'
        }
        else if(this.props.toLoad === 'saved')
        {
            listView = 'Guardado'
        }
        else if(this.props.toLoad === 'received')
        {
            listView = 'Eliminado'
        }
        else if(this.props.toLoad === 'all')
        {
            const mensajes = this.props.voicemails.map(voicemail => {
                return <VoiceMailTable voicemail={voicemail} />
            });
            listView = mensajes;
        }

        return <div className={ classes.ListVoiceMail} >
            <h1 className={ classes.h1 }>{ this.props.title }</h1>
                { listView }
        </div>;
    }
}

export default ListVoiceMail;