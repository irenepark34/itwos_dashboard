import { Button } from "@mui/material"
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
           <Button className="admin" variant="contained">관리자</Button>
        </div>
    </div>
  )
}
