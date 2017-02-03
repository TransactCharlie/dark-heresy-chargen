import React from 'react';

export function mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
        return callback(key, object[key]);
    });
}

export function mapList(l, callback) {
  return l.map(function (v) { return callback(v); })}


export function contains(a, obj)
{
  for (var i = 0; i < a.length; i++) {
       if (a[i] === obj) {
           return true;
       }
   }
   return false;
}

export function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

export class PrintObject extends React.Component {
    render(){
        const jd = JSON.stringify(this.props.payload, null, 4);
        return (
            <div>
                <pre>{jd}</pre>
            </div>
        );
    }
}
