import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }, idx) => {
                    let color;
                    idx % 2 === 0 ? color = "rgb(255, 255, 255)" : color = "rgb(0, 228, 228, 0.25)" ;
                    return  <tr key={id} style={{ backgroundColor: color, }}>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
};

export default TransactionHistory;