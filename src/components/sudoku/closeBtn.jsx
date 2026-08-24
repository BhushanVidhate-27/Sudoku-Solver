export default function CloseBtn({text, onClose}) {
    let cancel = () => {
        onClose();
    };
    return(
        <>
        <div className="btn">
            <button onClick={cancel}>
                {text}
            </button>
        </div>
        </>
    );
}
