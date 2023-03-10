import React from 'react';

const PointsTable = ({points}) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>r</td>
                    <td>x</td>
                    <td>y</td>
                    <td>hit</td>
                    <td>date</td>
                </tr>
                </thead>
                <tbody>
                {points.map((p) =>
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.r}</td>
                        <td>{p.x}</td>
                        <td>{p.y}</td>
                        <td style={{color: `${p.hit ? "green" : "red"}`}}>
                            {p.hit ? "yes" : "no"}
                        </td>
                        <td>{p.date}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};


export default PointsTable;