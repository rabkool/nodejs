FROM 18.16.0-slim
RUM mkdir /src
COPT aaa.js /src
CMD ["node", "/src/aaa.js"]
