import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem'

function TransactionHistory({items}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.amount}
                    />
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
};

export default TransactionHistory;