import React, {useEffect, useState} from 'react';
import {MyCanvas} from "../components/canvas/MyCanvas";
import PointForm from "../components/UI/PointForm";
import PointService from "../API/PointService";
import PointsTable from "../components/table/PointsTable";

const MainPage = () => {
    const [inputR, setInputR] = useState(1);
    const [inputX, setInputX] = useState(0);
    const [inputY, setInputY] = useState(0);
    const [points, setPoints] = useState([])
    const [nowId, setNowId] = useState(0);
    const [lastHit, setLastHit] = useState(null);


    useEffect(() => {
        console.log("Обращение к серверу за списком точек...");
        fetchPoints();
    }, [])

    function fetchPoints() {
        const p = PointService.getAll();
        p.then(data => {
            setPoints(data);
            console.log(`Получено точек: ${data.length}`);
        })
            .catch(() => {
                console.log("Нет подключения к серверу.");
            });
    }

    const submit = (e) => {
        e.preventDefault();
        setLastHit(checkHit(inputR, inputX, inputY));
        addPoint(inputR, inputX, inputY);
    }


    const addPoint = (r, x, y) => {
        setNowId(nowId + 1);
        // const newPoint = {id: nowId, r: r, x: x, y: y, hit: checkHit(r, x, y)};
        sendPoint(r, x, y).then((p) => {
            console.log(`Successfully added point r=${r}, x=${x}, y=${y}`);
            setPoints([...points, p]);
            return p;
        })
    }

    const checkHit = (r, x, y) => {
        if (x <= 0 && y >= 0 && x * x + y * y <= r * r)
            return true;
        if (x > 0 && y > 0)
            return false;
        if (x >= 0 && y <= 0 && y > x - r / 2)
            return true;
        return -r / 2 <= x && x <= 0 && -r <= y && y <= 0;

    }

    async function sendPoint(r, x, y) {
        return await PointService.sendPoint(r, x, y);
    }

    const clear = (e) => {
        e.preventDefault();
        PointService.clearAll().then(() => {
        });
    }

    return (
        <div className="App">
            <MyCanvas R={inputR} points={points} addPoint={addPoint}/>

            {lastHit != null
                ? (lastHit
                    ? <h1 style={{color: "lime"}}>Hit</h1>
                    : <h1 style={{color: "red"}}>Did't hit</h1>)
                // eslint-disable-next-line
                : <h1/>
            }
            <h3>R = {inputR}</h3>
            <h3>X = {inputX}</h3>
            <h3>Y = {inputY}</h3>
            <PointForm
                setInputR={setInputR}
                setInputX={setInputX}
                setInputY={setInputY}
                setPoints={setPoints}
                submit={submit}
                clear={clear}
            />
            <br/>
            <PointsTable points={points}/>
        </div>
    );
};

export default MainPage;