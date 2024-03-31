import './Writing.css';

export const Writing = () => {
    return (
        <div className="Writing">
            <div className="Writing--Feature">
                <div className="Writing--FeatureImage">
                    <img src={`${process.env.PUBLIC_URL}/ColoringGodsLove.jpg`} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="Writing--FeatureText">
                    <h2>Coloring God&apos;s Love For Me: 100 Devotions To Inspire Young Hearts</h2>
                    <h5>Published by Tommy Nelson on June 14, 2022</h5>
                    <p>
                        Available online at Target, Walmart, Barnes & Noble, and Amazon
                    </p>
                    <p>
                        Janae writes about <i>Coloring God&apos;s Love for Me</i> and how art therapy has influenced her work as a writer. She provides other recommendations of faith-based coloring books that can prompt therapeutic art-making to reduce anxiety, promote relaxation, and strengthen your faith.
                    </p>
                    <a href="https://shepherd.com/best-books/coloring-books-from-a-faith-based-art-therapist">
                        <button className="Writing--Button">
                            Read Post
                        </button>
                    </a>
                </div>
            </div>
        </div >
    )
}