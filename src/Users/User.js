import React from 'react';

const User = (props) => {
    return (
        <div>
            name:{props.children} age:{props.age}
        </div>
    )
};
export default User;










/* import React from 'react';
const User = (props) => {
    let age = props.age ? props.age : 'NA'
    if (props.children) {
        return (
            <div>
                <h2>name :{props.children} age:{age}</h2>
            </div>
        )
    } else {
        return (<h3>Invalid Entry</h3>)
    }

};
export default User; */
