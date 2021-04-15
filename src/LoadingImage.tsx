import React, {useState, useEffect} from 'react'
import { getCombinedNodeFlags } from 'typescript';
import Icon_IMG from './img/icon_img.jpg'


function LoadingImage (props: any) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect( function fetch_func() {
        const REQUEST_URL ='https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
        const requestF1 = fetch(REQUEST_URL)
            .then (res => res.json())
            .then (res => res);
        const requestF2 = fetch(REQUEST_URL)
            .then (res => res.json())
            .then (res => res);

        Promise.all<number,number>([requestF1, requestF2]).then((result) => {
            const [firstNumder, secondNumber] = result;
            console.log(firstNumder, secondNumber)
            if ((firstNumder % 2 === 0) && (secondNumber % 2 === 0)) {
                setIsLoading(false)
            } else {
                fetch_func()
            }
        })
    },[])
    // @ts-ignore
    console.log(props.url)
    // const URL_IMEGE :string = 'props.url'
    return isLoading ?         
        <div>
            <img src={Icon_IMG} alt="loading" className='img-loading' />
            <div>LOADING</div>
        </div>
        : <div>
            <img src={props.url} alt="CAT" className='img-cat'/>
        </div>
}

export default LoadingImage