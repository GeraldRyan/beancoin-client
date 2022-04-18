import React, { useState } from 'react'
import { MILLISECONDS_JAVA } from '../config';
import Transaction from './Transaction';
import { Button } from 'react-bootstrap'


function ToggleTransactionDisplay({ block }) {
    const [displayTransaction, setDisplayTransaction] = useState(false)
    const { tx } = block;

    const toggleDisplayTransaction = () => {
        setDisplayTransaction(!displayTransaction)
    }

    if (displayTransaction) {
        return (
            <div>
                {
                    tx.map(t => {
                        return (
                            <div key={t.id}>
                                <Transaction transaction={t} />
                            </div>
                        )
                    })}
                <Button
                variant="danger"
                size="sm"
                onClick={toggleDisplayTransaction}
                >Show Less</Button>
            </div>
        )
    }

    return (
        <div>
            <br />
            <Button
                variant="danger"
                size="sm"
                onClick={toggleDisplayTransaction}
            >
                Show More
            </Button>
        </div>
    )
}

function Block({ block }) {

    const { timestamp, hash, tx } = block;
    const hashDisplay = `${hash.substring(0, 15)}...`
    const timestampDisplay = new Date(timestamp / MILLISECONDS_JAVA).toLocaleString();
    return (
        <div className="Block">
            <div>Hash: {hashDisplay}</div>
            <div>Timestamp: {timestamp}</div>
            <div>Date: {timestampDisplay}</div>
            <div>Transaction String: {JSON.stringify(tx)}</div>
            <ToggleTransactionDisplay block={block} />
        </div>
    )
}

export default Block