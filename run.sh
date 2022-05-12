docker run --rm -it \
  --network host \
  -v $(pwd)/app:/app/src \
  -v /home/neon/.aws:/root/.aws \
  -w /app/src aws:node-serverless bash 
