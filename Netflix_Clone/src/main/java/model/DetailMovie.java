package model;
// default package
// Generated Apr 27, 2021, 3:04:25 PM by Hibernate Tools 5.4.27.Final

/**
 * DetailMovie generated by hbm2java
 */
public class DetailMovie implements java.io.Serializable {

	private char stt;
	private Category category;
	private Movie movie;

	public DetailMovie() {
	}

	public DetailMovie(char stt, Category category, Movie movie) {
		this.stt = stt;
		this.category = category;
		this.movie = movie;
	}

	public char getStt() {
		return this.stt;
	}

	public void setStt(char stt) {
		this.stt = stt;
	}

	public Category getCategory() {
		return this.category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Movie getMovie() {
		return this.movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

}
