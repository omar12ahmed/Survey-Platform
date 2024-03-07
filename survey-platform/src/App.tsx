import './App.css'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { TableHeader, TableRow, TableHead, TableBody } from './components/ui/table'

function App() {

  return (
    <>
   <div>
    <h1 style={{textAlign:'center'}}>Projects</h1>
    <div style={{border:"solid black 2px", padding: "6§0px"}}>

    <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name | </TableHead>
          <TableHead> Location | </TableHead>
          <TableHead> Actions | </TableHead>
        </TableRow>
      </TableHeader>
      <div>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
      <CardContent>
     <p>Let’s get started on bringing your ideas to life.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button> Create</Button>
      </CardFooter>
    </Card>
      </div>
      

    </div>
    
    
    <p></p>

   </div>
    </>
  )
}

export default App
