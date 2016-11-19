import React from 'react';

export class DumpObject extends React.Component {

    render(){
        const jd = JSON.stringify(this.props.payload);
        return (
            <div>
                <pre>{jd}</pre>
            </div>
        );
    }
}
