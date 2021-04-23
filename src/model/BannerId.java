package model;

// default package
// Generated Apr 23, 2021, 2:11:14 PM by Hibernate Tools 5.4.30.Final

/**
 * BannerId generated by hbm2java
 */
public class BannerId implements java.io.Serializable {

	private int bannerId;
	private byte menuId;
	private int movieId;

	public BannerId() {
	}

	public BannerId(int bannerId, byte menuId, int movieId) {
		this.bannerId = bannerId;
		this.menuId = menuId;
		this.movieId = movieId;
	}

	public int getBannerId() {
		return this.bannerId;
	}

	public void setBannerId(int bannerId) {
		this.bannerId = bannerId;
	}

	public byte getMenuId() {
		return this.menuId;
	}

	public void setMenuId(byte menuId) {
		this.menuId = menuId;
	}

	public int getMovieId() {
		return this.movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof BannerId))
			return false;
		BannerId castOther = (BannerId) other;

		return (this.getBannerId() == castOther.getBannerId()) && (this.getMenuId() == castOther.getMenuId())
				&& (this.getMovieId() == castOther.getMovieId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getBannerId();
		result = 37 * result + this.getMenuId();
		result = 37 * result + this.getMovieId();
		return result;
	}

}
