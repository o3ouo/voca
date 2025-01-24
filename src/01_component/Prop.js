import React, {useState} from 'react';
import UserName from './UserName';

export default function Prop({age}) {

    const msg = age > 19 ? "성인" : "민짜";

    return (
        <div>
            <h1>Props</h1>

            <h2>Jeong({age}): {msg}</h2>

            {/* props만 넘겨받는 컴포넌트를 만들어 사용 가능 */}
            <UserName age={age}/>
        </div>
    );
}

/*********************************************************************************************
** Props **
ex.

export default function Prop(props) {
    console.log(props);

    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h1>Props</h1>

            // 넘겨받은 값을 변경하는 것이 아니라 여기서 만든 스테이트 값을 변경 시키는 것 
            <button onClick={ () => {setAge(age + 1)} }>Jeong({age})</button>
        </div>
    );
}

*********************************************************************************************/
