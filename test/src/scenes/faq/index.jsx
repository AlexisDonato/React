import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(colors.palette.mode);

return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.green.Accent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    gdfqdgdfsgdfsgdfsg dgfsdf dg dsfg sfg dfsgdsgdsgdfsgfdsgs dgd sg fsdgdsg sdfg dfs sdfg dsf g.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.green.Accent[500]} variant="h5">
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    gdfqdgdfsgdfsgdfsg dgfsdf dg dsfg sfg dfsgdsgdsgdfsgfdsgs dgd sg fsdgdsg sdfg dfs sdfg dsf g.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.green.Accent[500]} variant="h5">
                    Your favorite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    gdfqdgdfsgdfsgdfsg dgfsdf dg dsfg sfg dfsgdsgdsgdfsgfdsgs dgd sg fsdgdsg sdfg dfs sdfg dsf g.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.green.Accent[500]} variant="h5">
                    Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    gdfqdgdfsgdfsgdfsg dgfsdf dg dsfg sfg dfsgdsgdsgdfsgfdsgs dgd sg fsdgdsg sdfg dfs sdfg dsf g.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.green.Accent[500]} variant="h5">
                    Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    gdfqdgdfsgdfsgdfsg dgfsdf dg dsfg sfg dfsgdsgdsgdfsgfdsgs dgd sg fsdgdsg sdfg dfs sdfg dsf g.
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
}

export default FAQ;