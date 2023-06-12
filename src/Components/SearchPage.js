import { React, useEffect, useState } from "react"
import "./SearchPage.css"
import InfiniteScroll from "react-infinite-scroll-component"

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [allPokemon, setAllPokemon] = useState([])
    const [pokiIndex, setpokiIndex] = useState()
    const [allimages, setallimages] = useState([])
    const [allName, setAllName] = useState([])
    useEffect(() => {
        fetch("http://pokeapi.co/api/v2/pokemon/?limit=600")
            .then((res) => res.json())
            .then(data => setAllPokemon(data.results))
    }, [])

    useEffect(() => {
        // console.log(allPokemon)
        allPokemon?.map((data, index) => {
            const name = (data.name).toUpperCase()
            setAllName(na => [...na, {name}])
            setallimages(image => [...image, `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1}.svg`])
            ///setallimages()
        })
    }, [allPokemon])

    // useEffect(() => {
    //     console.log(allimages)
    // },[allimages])
    const handleSearch = async () => {

        //https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg
    }
    return (
        <div className="main-div" >
            <h1 className="header" >Pokedex</h1>
            <input onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <button onClick={handleSearch} >Search</button>
            <InfiniteScroll
                dataLength={allPokemon.length} //This is important field to render the next data
                // next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            // }
            // releaseToRefreshContent={
            //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            // }
            >
                <div className="all-poke-div" >
                    {
                        allName?.map((data, index) => {
                            return (
                                <div key={index} className="card-div" >
                                    {console.log(data)}
                                    <img src={allimages[index]} alt={data.name} height="200px" />
                                    <h2>{data.name}</h2>
                                    {/* {
                                        allimages[index] ? (
                                            <>
                                               
                                            </>
                                        ) : (
                                            null
                                        )
                                } */}

                                </div>

                            )

                        })
                    }
                </div>

            </InfiniteScroll>

        </div>
    )
}

export default SearchPage