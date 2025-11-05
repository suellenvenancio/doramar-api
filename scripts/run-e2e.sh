#!/usr/bin/env bash
set -euo pipefail

# Habilita modo "strict" (para parar em qualquer erro)
# -e = exit on error
# -u = erro se variável não definida
# -o pipefail = se qualquer comando num pipe falhar, o script falha

echo "📦 Subindo containers..."
docker compose -f docker-compose.test.yml up -d --wait

# --wait espera todos os serviços com healthcheck ficarem saudáveis
# (disponível no Docker Compose v2.20+)
# Se a sua versão não tiver --wait, substituímos por um loop abaixo 👇

# Alternativa manual:
# echo "⏳ Aguardando banco ficar saudável..."
# until docker exec test-db pg_isready -U test > /dev/null 2>&1; do
#   printf "."
#   sleep 2
# done
# echo "✅ Banco de dados pronto!"

echo "🛠 Rodando migrações..."
dotenv -e .env.test -- npx prisma migrate deploy

echo "🧪 Rodando testes E2E..."
dotenv -e .env.test -- npx jest --config jest-e2e.config.ts --runInBand

# Captura o status de saída dos testes
TEST_EXIT_CODE=$?

echo "🧹 Derrubando containers..."
docker compose -f docker-compose.test.yml down -v

exit $TEST_EXIT_CODE
