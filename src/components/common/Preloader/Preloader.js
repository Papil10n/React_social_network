import preloader from '../../../assets/images/preloader.gif'

const Preloader = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;