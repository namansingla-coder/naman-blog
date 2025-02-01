import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return (
        <>
        <div className="mt-36 md:mt-20 flex flex-col gap-2 pb-12">
  <div className="flex gap-7 mx-auto">
    <Link to=""><img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" className="max-w-6 max-h-6" /></Link>
    <Link to="https://www.instagram.com/naman_singla__/"><img src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" className="max-w-8 max-h-8" /></Link>
    <Link to="https://x.com/NamanSingla7642"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcErlbMsKsQG45xvST9jdYxzWwUWru1KCZJQ&s" className="max-w-6 max-h-6" /></Link>
    <Link to="https://www.linkedin.com/in/namansingla7642"><img src="https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png" className="max-w-6 max-h-6" /></Link>
  </div>
  <div className="mx-auto">
    <p className="text-sm text-gray-800">Copyright @2020 All rights reserved</p>
  </div>
  
</div>
        </>
    )
}
export default Footer;