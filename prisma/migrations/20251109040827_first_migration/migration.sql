-- CreateTable
CREATE TABLE "TvShows" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "cast" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "premiereDate" TIMESTAMP(3) NOT NULL,
    "originalName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TvShows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TvShowGenres" (
    "id" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "TvShowGenres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListTvShow" (
    "id" TEXT NOT NULL,
    "listId" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ListTvShow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RatingScale" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "RatingScale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ratings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,
    "scaleId" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActorsOnTvShows" (
    "id" TEXT NOT NULL,
    "tvShowId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,

    CONSTRAINT "ActorsOnTvShows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Actors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "TvShowGenres" ADD CONSTRAINT "TvShowGenres_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShows"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TvShowGenres" ADD CONSTRAINT "TvShowGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListTvShow" ADD CONSTRAINT "ListTvShow_listId_fkey" FOREIGN KEY ("listId") REFERENCES "Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListTvShow" ADD CONSTRAINT "ListTvShow_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lists" ADD CONSTRAINT "Lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_scaleId_fkey" FOREIGN KEY ("scaleId") REFERENCES "RatingScale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorsOnTvShows" ADD CONSTRAINT "ActorsOnTvShows_tvShowId_fkey" FOREIGN KEY ("tvShowId") REFERENCES "TvShows"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorsOnTvShows" ADD CONSTRAINT "ActorsOnTvShows_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
