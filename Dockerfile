FROM denoland/deno:1.35.0
EXPOSE 8080
WORKDIR /project
ADD . .
ARG ACCESS_TOKEN_GITHUB
ENV RUCK_DEV false
ENV RUCK_PORT 8080
ENV ACCESS_TOKEN_GITHUB $ACCESS_TOKEN_GITHUB
RUN ./scripts/makeEnvModules.sh
CMD ["./scripts/serve.sh"]
