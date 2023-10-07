import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex space-y-4 flex-col h-[100vh] items-center justify-center">
            <h2 className="text-5xl font-bold">404 Error!!!</h2>
            <h2 className="text-2xl font-bold">There is nothing to show</h2>
            <Link to="/"><button className="btn btn-neutral">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;