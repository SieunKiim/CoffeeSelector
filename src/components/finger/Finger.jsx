import './Finger.css';

function Finger(props) {
    const touch = props.touchInfo;
    return <div className="Finger"
                style={{
                    left: touch.clientX - 50,
                    top: touch.clientY - 50,
                }}
    >

    </div>;
}

export default Finger;