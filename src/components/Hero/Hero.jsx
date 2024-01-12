
import "./hero.css"

const HeroComp = ()=>{
    return(
        <section>
            <div className="img-comp">
                <img src="https://imgs.search.brave.com/NdRWwVa3J8ka8WVfiXvxY6ZnmxdRIBRZPv2dXXRMFtE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibXct/bG9nby0yMDQ0MTc1/MS5qcGc" alt="" />
            </div>

            <div className="text-comp">
                <h2>Paragrap Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, incidunt aperiam ut alias laborum recusandae? Assumenda, repudiandae! Provident culpa saepe alias? Eveniet ab et ipsum officia! Consectetur, cupiditate?</p>
                <button>Read more...</button>
            </div>

        </section>
    )
}

export default HeroComp