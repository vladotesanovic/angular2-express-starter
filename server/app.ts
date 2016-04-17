/// <reference path="../typings/main.d.ts" />
import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import * as logger from "morgan";
import { json, urlencoded } from "body-parser";
import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";

const app: express.Application = express();
app.disable("x-powered-by");

app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static("./public"));
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", protectedRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req: express.Request, res: express.Response) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req: express.Request, res: express.Response) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
