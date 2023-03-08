import React from 'react';
import {ButtonWithValue} from "./ButtonWithValue";
import MyButton from "./MyButton";

const PointForm = ({setInputR, setInputX, setInputY, submit, clear}) => {
    const changeInput = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case "R":
                setInputR(parseFloat(e.target.value));
                break;
            case "X":
                setInputX(parseFloat(e.target.value));
                break;
            case "Y":
                setInputY(parseFloat(e.target.value));
                break;
        }
    }

    return (
        <div>
            <form>
                <table className="form_table">
                    <tbody>
                        <tr>
                            <td><span>R:</span></td>
                            <td><ButtonWithValue onClick={changeInput} name="R" value={1}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="R" value={1.5}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="R" value={2}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="R" value={2.5}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="R" value={3}></ButtonWithValue></td>
                        </tr>
                        <tr>
                            <td><span>X:</span></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={-3}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={-2}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={-1}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={0}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={1}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={2}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={3}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={4}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="X" value={5}></ButtonWithValue></td>
                        </tr>
                        <tr>
                            <td><span>Y:</span></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={-3}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={-2}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={-1}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={0}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={1}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={2}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={3}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={4}></ButtonWithValue></td>
                            <td><ButtonWithValue onClick={changeInput} name="Y" value={5}></ButtonWithValue></td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td></td>
                            <td>
                                <MyButton onClick={submit}>Submit</MyButton>
                            </td>
                            <td>
                                <MyButton onClick={clear}>Clear All</MyButton>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    );
};

export default PointForm;