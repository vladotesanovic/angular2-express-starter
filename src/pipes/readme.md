## Debug view in Angular2

Export any variable to console with this Pipe.

Usage:

```bash

# dataArray is extracted in console
{{dataArray|debug:"Information"}}

```

Installation:
* Copy debug.ts to your pipes folder
* Reference it in component
* Attach it @View with pipes: [DebugPipe]