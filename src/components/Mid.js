import React, {useState} from 'react';
import './../style/Mid.css';
import Data from './../dataset/posts.json';

// const arry = [
//   { id:1, name: "สุดยอดเกมฮิตอย่าง Ghost of Tsushima, FIFA 21 Champions Edition, Assassin's Creed Valhalla PS4 & PS5, Just Dance 2021 และอีกมากมาย พร้อมมาจัดโปรโมชันดีๆ ตอนรับเทศกาลความสนุกแล้ววันนี้" },
//   { id:2, name: "หากคุณกำลังอยากเริ่มต้นพัฒนาเกมของตัวเอง ไม่ว่าจะบน PC, Android หรือ iOS ห้ามพลาด !! กับหลักสูตรที่จะมาสอนแบบจับมือทำ - สอนสร้างเกมตั้งแต่ศูนย์ถึงร้อย !!" },
//   { id:3, name: "ปูพื้นฐานอย่างจริงจัง ให้คุณเขียนโปรแกรมได้ก่อนพัฒนาเกม ที่ไม่ใช่เพียงการใช้โปรแกรมฉาบฉวย แต่จะได้ครบทุกพื้นฐานจริง ๆ" }
// ]

function Mid(){
    const [test, settest] = useState([])
    const [text, settext] = useState("")

    function onTextChange({target: {value}}) {
    	settext(value)
    }

    function addPost({target: {value}}, e) {
    	console.log(value)
    	console.log(value.length)
    	if (value.length > 0) {
    		settest([...test, text])
    	    settext("")
    	}
    }

	return(
		<div className="containers">
		    <div className="cards">
		    	<div className="cards-in">
			        <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="40" height="40" />
			        <button className="buttonPost"  type="button" data-toggle="modal" data-target="#exampleModal"> <span className="post">คุณคิดอะไรอยู่ ...</span></button>
			    </div>
			</div> 
			{test.slice(0).reverse().map((post, index) =>{
		    	return(
            	<div className="cards" key={index} tabIndex={index+1}>
		    	        <div className="cards-in">
			                <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="40" height="40" />
		                    <div className="username">
		                        <span >username</span>
		                    </div>
		                    <div className="time">
		        	             <span className="stetus">5 นาทีที่แล้ว</span>
		                    </div>
			                <div className="posts" >
			        	        {post}
			               </div>
			               <hr/>
			            </div>
			        </div>
            	)
            })} 
			{Data.map(posts =>{
				return(
					<div className="cards" key={posts.id}>
		    	        <div className="cards-in">
			                <img className="img" alt="logo" src={posts.imageProfile} width="40" height="40" />
		                    <div className="username">
		                        <span >{posts.name}</span>
		                    </div>
		                    <div className="time">
		        	             <span className="stetus">{posts.status}</span>
		                    </div>
			                <div className="posts">
			        	        {posts.content}
			               </div>
			               <hr/>
			            </div>
			        </div>
			    )
		    })}
		    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			    <div className="modal-dialog">
			        <div className="modal-content">
			            <div className="createPost">
			                <div className="titleModalPost">
			                    <span>สร้างโพสต์</span>
			                </div>    
			                <hr/>
			                <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="40" height="40" />
			                <div className="username">
		                        <span className="namepost">username</span>
		                    </div>
		                    <div className="time">
		        	             <span className="stetus">เฉพาะฉัน</span>
		                    </div>
		                    <div className="wposts">
		                        <textarea cols="60" value={text} onChange={onTextChange} />
		                    </div>
		                    <button className="detailPost" onClick={addPost} value={text} >โพสต์</button>
		                   
			            </div>     
			        </div>
			    </div>
			</div>
		</div>
	)
}


export default Mid;