import React from 'react'
import { MILLISECONDS_JAVA } from '../config';
import Transaction from './Transaction';

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
            <div>
                {
                    tx.map(t => {
                        return (
                            <div key={t.id}>
                                <Transaction transaction={t} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Block