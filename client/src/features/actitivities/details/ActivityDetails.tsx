import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities"

type Props = {
    selectedActivity: Activity
    cancelActivity: () => void
    openForm: (id: string) => void
}

export default function ActivityDetails({ selectedActivity, cancelActivity, openForm }: Props) {

    const { activities } = useActivities();
    const activity = activities?.find(x => x.id === selectedActivity.id);

    if(!activity?.id) {
        return (
            <Typography>Loading...</Typography>
        )
    }

    return (
        <Card>
            <CardMedia
                component='img'
                src={`/images/categoryImages/${activity.category}.jpg`}
            />
            <CardHeader title={activity.title} />
            <CardContent>
                <Typography variant="subtitle1">{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color='primary' onClick={() => openForm(activity.id)}>Edit</Button>
                <Button onClick={() => cancelActivity()} color='inherit'>Cancel</Button>
            </CardActions>
        </Card>
    )
}
