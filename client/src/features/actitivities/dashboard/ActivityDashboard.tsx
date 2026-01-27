
import { Grid } from "@mui/material"
import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../forms/ActivityForm"

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
}


export default function ActivityDashboard({ activities, selectActivity, 
    cancelActivity, selectedActivity, 
    editMode, openForm, closeForm
} : Props) {
  return (
    <Grid container spacing={3}>
        <Grid size={7}>
            <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
            />
        </Grid>
        <Grid size={5}  >
            {selectedActivity && !editMode && (
                <ActivityDetails 
                    selectedActivity={selectedActivity} 
                    cancelActivity={cancelActivity} 
                    openForm={openForm}
                />
            )}
            {editMode && (
                <ActivityForm activity={selectedActivity} closeForm={closeForm} />
            )}
        </Grid>
    </Grid>
  ) 
}
