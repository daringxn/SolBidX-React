import SyncLoader from "react-spinners/SyncLoader";

export default function CardLoading({ width, ...props }) {
    return (
        <div className="card-loading">
            <SyncLoader
                cssOverride={{}}
                color="#7ce0a1"
                loading
                margin={2}
                size={10}
                speedMultiplier={1}
            />
        </div>
    )
}