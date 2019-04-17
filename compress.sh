
#########################
# File Compression in SDC
#########################

# to compress an output stream, run it through your favorite compressions command
# ex (using gzip):

node generate.js | gzip -c > data.gz

# generate.js needs to output to stdout (console.log), not a file
# pipe that to gzip, the -c option send compressed output to stdout
# then pipe the compressed output to a file, data.gz
# the uncompressed data is never stored on disk

# to reverse this, use:

gunzip -c data.gz | node importPG.js
# or
gunzip -c data.gz | node importC.js

# gunzip decompresses the file, the -c command send uncompressed output to stdout
# importX.js should read from stdin, not from a regular file.
# pro-tip: you can (very easily) write importX.js to work with either a file or stdin
