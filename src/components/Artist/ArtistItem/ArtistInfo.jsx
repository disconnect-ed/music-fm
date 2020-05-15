import React from "react";
import {Button, Spinner} from "react-bootstrap";

const ArtistInfo = (props) => {
    if (props.artistInfo) {
        const content = props.artistInfo.bio.content;
        return (
            <div className="artist-info pt-5">
                <div className="row">
                    <div className="col-lg-4 col-12 text-center">
                        <div className="artist-info__img">
                            <img src={Object.values(props.artistInfo.image[4])[0]} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="artist-info__descr">
                            <h2 className="text-lg-left text-center">
                                {props.artistInfo.name}
                            </h2>
                            <p className="text-lg-left text-center">
                                Слушателей: {props.artistInfo.stats.listeners}
                            </p>
                            <p className="text-lg-left text-center">
                                Прослушиваний: {props.artistInfo.stats.playcount}
                            </p>
                            <p className="text-lg-left text-center">
                                В туре: {props.artistInfo.ontour === '1' ? 'да' : 'нет'}
                            </p>
                            <p className="text-lg-left text-center">
                                Жанр: {props.artistInfo.tags.tag.map(result => {
                                return <b>{result.name}, </b>
                            })}
                            </p>
                            <p className="text-lg-left text-center">
                                О группе: <br/>
                                {content.slice(0, 700)}... <br/>
                                <Button className='btn-danger mt-3' ><a className='custom_link' target={'_blank'} href={props.artistInfo.bio.links.link.href}>Больше информации на last.fm</a></Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border" />
    }
}


export default ArtistInfo;