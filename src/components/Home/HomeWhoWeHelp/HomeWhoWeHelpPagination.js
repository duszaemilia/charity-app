import React, {useState} from "react";

export default function HomeWhoWeHelpPagination({institutions}) {

    const [rowsNumber] = useState(3);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumber] = useState(Math.ceil(institutions.length / rowsNumber))

    const handleChangePage = (event) => {
        const clickedPage = Number(event.target.innerText);
        setCurrentPage(Number(event.target.innerText));

         }

    const pages = () => {
        if (pageNumber <= 1) {
            return <button className="btn btn-hidden" key={0}>0</button>;
        } else {
            let numbers = []
            for (let i = 1; i <= pageNumber; i++) {
                numbers.push(
                    <button
                        className={`btn ${currentPage === i ? "btn-active" : ""}`}
                        key={i}
                        onClick={handleChangePage}>{i}
                    </button>)
            }
            return numbers
        }
    }
    return (
        <>
            <div className="helpPage">
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{institutions[0].name}</h4>
                        <p className="description__text">{institutions[0].goal}</p>
                    </div>
                    <p className="organisation__things">{institutions[0].items}</p>
                </div>
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{institutions[1].name}</h4>
                        <p className="description__text">{institutions[1].goal}</p>
                    </div>
                    <p className="organisation__things">{institutions[1].items}</p>
                </div>
                <div className="helpPage__organisation">
                    <div className="organisation__description">
                        <h4 className="description__title">{institutions[2].name}</h4>
                        <p className="description__text">{institutions[2].goal}</p>
                    </div>
                    <p className="organisation__things">{institutions[2].items}</p>
                </div>
            </div>

            <div className="pageNumbers">
                {pages()}
            </div>
        </>
    )
}