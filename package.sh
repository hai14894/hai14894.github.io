#!/usr/bin/env bash
tar -cv \
  --exclude=ASSESSMENT.md \
  --exclude=storefront.tar \
  --exclude=storefront.tar.gz \
  --exclude=package.sh \
  --exclude=yarn-error.log \
  --exclude=node_modules \
  -f storefront.tar .

gzip -f storefront.tar
