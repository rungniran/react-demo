import React from 'react';
import Data from './../dataset/pages.json';
import './../style/Left.css';


function Left() {
	return(
		
        <div className="containers">
        	<ul className="menuLift">
        	    
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" width="28" height="28" />
	        	    <span>username</span>
	        	</a>
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png?_nc_eui2=AeGsBZPqKpdCS1MiBuOCKsBqC4TVz-PYFxULhNXP49gXFZPCBcH22Ax0ybfulp0-3Rux_aK5OzYat0A3WhyWfFy0" width="28" height="28" />
	        	    <span>โควิด-19: ศูนย์ข้อมูล</span>
	        	</a>
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeG3gUOi9B3papWIzM_cOQ9IqfpKmA4GtxSp-kqYDga3FJmSOE7YIUbWk0McGawve3GK6HVSCvBsViwAk-aHZ4BP" width="28" height="28" />
	        	    <span>เพื่อน</span>
	        	</a>
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeFqxofXFxQh5EeBTC3YECsutEPFOzh_t-u0Q8U7OH-36zEMa_onQJcLJYIBNF302DghmoNI-BrYM_wr7FcyoGpM" width="28" height="28" />
	        	    <span>เพจ</span>
	        	</a>
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png?_nc_eui2=AeHcXxQFjyMpWZ32YUciEl-uFvGCZ9KBlcEW8YJn0oGVwXLksgrJhJ7Ek7NE7fqqNvS_qiJffmMJhsEKBjv0B6Ex" width="28" height="28" />
	        	    <span>ความทรงจำ</span>
	        	</a>
	        	<a className="link" href="/#">
	        	    <img className="img" alt="logo" src="" width="28" height="28" />
	        	    <span>ดูเพิ่มเติม</span>
	        	</a>
           
            <hr/><br/> 
	        <h3>ทางลัดของคุณ</h3>
	            {Data.map(data => {
	        		return(
	        			<React.Fragment key={data.name}>
		        			<a className="link" href="/#">
		        	            <img  className="img" alt="logo" src={data.icon} width="28" height="28" />
		        	            <span key={data} >{data.name}</span>
		        	        </a>
	        	        </React.Fragment>
	        			)
	        	})}  
             
	        </ul>
        </div>

	)
}

export default Left;