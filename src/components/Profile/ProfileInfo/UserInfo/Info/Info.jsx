import s from './Info.module.css';

const Info = (props) => {
    return (
        <div className={s.info}>
            <p>Date of Birth: 15 March</p>
            <p>City: Dnipro</p>
            <p>Education: Ukrainian State University of Science and Technologies</p>
        </div>
    )
}

export default Info;