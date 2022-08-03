

import * as express from 'express';
import {Request, Response} from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";
import {searchLessons} from "./search-lessons.route";
import {saveCourse} from './save-course.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

const port = 9000;

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

app.route('/').get(Home);
const httpServer:any = app.listen(port, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

function Home (req: Request, res: Response) {
    res.status(200).send(`
        <h1 style="align-text: center;text-align: center;width: 19ch;margin: auto;">Welcome to</br>Angular Typescript Testing Masterclass API 🚀</h1>

        <p>Available links</p>
        <ul>
            <li><a href="http://localhost:${port}/api/courses" > Get "/api/courses" </a></li>
            <li><a href="http://localhost:${port}/api/courses/1" > Get "/api/courses/:id" </a></li>
            <li><a href="http://localhost:${port}/api/lessons" > Get "/api/lessons" </a></li>
            <li><a href="http://localhost:${port}/api/courses/1" > Put "/api/courses/:id" </a></li>
        </ul>
    `)
}




