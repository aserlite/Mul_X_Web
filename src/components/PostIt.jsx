import "./styles/PostIt.css";
import image from '.././images/post.png';
import pin from '.././images/pin.png';

const PostIt = ({ text, customClass }) => {
    return (
        <div className={"post-it " + customClass}>
            <img src={pin} alt="" className="pin"/>
            <div>
                <p>{text}</p>
                <img src={image} alt="image de post it"/>
            </div>
        </div>
    );
};

export default PostIt;
