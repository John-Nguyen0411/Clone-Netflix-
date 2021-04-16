// default package
// Generated Apr 16, 2021, 3:06:54 PM by Hibernate Tools 5.4.18.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Category generated by hbm2java
 */
public class Category implements java.io.Serializable {

	private int categoryId;
	private Menu menu;
	private String metaTitle;
	private Date createDate;
	private String nameCategory;
	private Set detailMovies = new HashSet(0);

	public Category() {
	}

	public Category(int categoryId, Menu menu) {
		this.categoryId = categoryId;
		this.menu = menu;
	}

	public Category(int categoryId, Menu menu, String metaTitle, Date createDate, String nameCategory,
			Set detailMovies) {
		this.categoryId = categoryId;
		this.menu = menu;
		this.metaTitle = metaTitle;
		this.createDate = createDate;
		this.nameCategory = nameCategory;
		this.detailMovies = detailMovies;
	}

	public int getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public Menu getMenu() {
		return this.menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public String getMetaTitle() {
		return this.metaTitle;
	}

	public void setMetaTitle(String metaTitle) {
		this.metaTitle = metaTitle;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getNameCategory() {
		return this.nameCategory;
	}

	public void setNameCategory(String nameCategory) {
		this.nameCategory = nameCategory;
	}

	public Set getDetailMovies() {
		return this.detailMovies;
	}

	public void setDetailMovies(Set detailMovies) {
		this.detailMovies = detailMovies;
	}

}
