import React, {Component} from 'react';

class CarList extends Component {
    render() {
        console.log(this.props);

        const { cars } = this.props;


        return (
            <div>
                <h3>Car list</h3>
                <ul>
                    {cars.map(i => (
                        <li key={i.value}>{i.value}</li>
                    ))}
                </ul>
            </div>
        )
    };
}

export default CarList;
