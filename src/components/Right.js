import React from 'react';
import './../style/Right.css';
import DataUser from './../dataset/users.json' 

function Right(){
	return(
		<div className="containers">
		    <div className="covar">
			    <div className="page">
			        <h3>เพจของคุณ</h3>   
			        <ul className="menuLift"> 
        	            <a className="linkPage" href="/">
        	                <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="28" height="28" />
        	                <span>username</span>
        	            </a>
                	</ul>
		        </div>
			    <hr/>
			    <div className="contact">
			        <h3>ผู้ติดต่อ</h3>
			        <ul>
			            <a className="listContact" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        	                <span className="">ดูทั้งหมด (71)</span>
        	            </a>
        	            <div className="collapse" id="collapseExample">
                            {DataUser.map(user =>{
                            	return(
                            	<a className="linkPage" href="/#" key={user.iduser}>
        	                    <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="28" height="28" />
        	                    <span>{user.username}</span>
        	                    </a>
        	                    )
                            })}        
                        </div>
			        </ul>
	            </div>
	        </div>    
		</div>
	)
}

export default Right;