import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/actitivities/dashboard/ActivityDashboard";
import { Box, Container, Typography } from '@mui/material';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isLoading } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(
      activities!.find(x => x.id === id)
    )
    setEditMode(false);
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
   
    if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }


  const handleFormClose = () => {
    setEditMode(false);
  }


  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        {!activities || isLoading ? (
          <Typography>Loading..</Typography>
        ): (
          <ActivityDashboard 
            activities={activities} 
            selectActivity={handleSelectActivity}
            cancelActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}

      </Container>
    </Box>
  )
}

export default App
